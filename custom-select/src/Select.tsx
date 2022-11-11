import styles from "./select.module.css";
import { useEffect, useState, useRef } from "react";

export type SelectOption = {
  label: string;
  value: string | number;
};

type MultipleSelectProps = {
  multiple: true;
  value?: SelectOption[];
  onChange: (value: SelectOption[] | undefined) => void;
};
type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const Select = ({ multiple, value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const clearOptions = () => {
    multiple ? onChange([]) : onChange(undefined);
  };

  const selectOption = (option: SelectOption) => {
    if (multiple) {
      if (value?.includes(option)) {
        onChange(value.filter((v) => v !== option));
      } else {
        if (value) onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  };

  const isOptionSelected = (option: SelectOption) => {
    return multiple ? value?.includes(option) : option === value;
  };

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };

    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <>
      <div
        ref={containerRef}
        className={styles.container}
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => setIsOpen(false)}
      >
        <span className={styles.value}>
          {multiple
            ? value?.map((v) => (
                <button
                  key={v.value}
                  className={styles["option-badge"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(v);
                  }}
                >
                  {v.label}

                  <span className={styles["remove-btn"]}>&times;</span>
                </button>
              ))
            : value?.label}
        </span>
        <button
          className={styles["clear-btn"]}
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
        >
          &times;
        </button>
        <div className={styles.divider}></div>
        <div className={styles.caret} onClick={() => setIsOpen(true)}></div>
        <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
          {options.map((option, index) => (
            <li
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ""
              } ${highlightedIndex === index ? styles.highlighted : ""}`}
              key={option.value}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
