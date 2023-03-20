import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FAQs = () => {
  return (
    <>
      <Typography variant="h3">Frequently Asked Questions</Typography>

      <Box sx={{ py: 2 }}>
        <Typography variant="h5" color="textError">
          Why is MUI a "crowd-funded open-source project"?
        </Typography>
        <Typography color="textSecondary" variant="body1" sx={{ py: 1 }}>
          The core of MUI is open-source to give users great freedom in how they
          use the software, and to enable the community to have influence over
          how the project progresses to make it appropriate for a wide range of
          use-cases. To make MUI a project that users can rely on for years to
          come, it needs to be well directed and financially sustainable
        </Typography>
      </Box>
      <Box sx={{ py: 2 }} color="textError">
        <Typography variant="h5">How is sponsorship money spent?</Typography>
        <Typography color="textSecondary" variant="body1" sx={{ py: 1 }}>
          Sponsorship money is used to fund software development, testing,
          documentation, and releases of the MUI software suite.
        </Typography>
      </Box>
      <Box sx={{ py: 2 }}>
        <Typography variant="h5" color="textError">
          Is sponsorship required to use MUI?
        </Typography>
        <Typography color="textSecondary" variant="body1" sx={{ py: 1 }}>
          Users are not legally required to give back to the MUI project, but it
          is in their interest to do so. By significantly reducing the amount of
          work needed to achieve business goals and reducing running costs, MUI
          results in huge time and money savings for users. We encourage
          organizations to contribute a portion of these savings back, enabling
          the project to advance more rapidly and result in even greater savings
          for your organization.
        </Typography>
      </Box>
      <Box sx={{ py: 2 }}>
        <Typography variant="h5" color="textError">
          What's the difference between Patreon and OpenCollective?
        </Typography>
        <Typography color="textSecondary" variant="body1" sx={{ py: 1 }}>
          Funds received via Patreon or other forms, directly support Olivier
          Tassinari and the core team mission. The funds go to a for-profit
          entity that employs some of the core team members. Funds donated via
          OpenCollective are managed transparently and aimed to sustain the MIT
          core of MUI. MUI benefits from the Open Collective's fiscal
          sponsorship (hosted as a non-profit), in exchange for 10% of the
          donations.
        </Typography>
      </Box>
    </>
  );
};

export default FAQs;
