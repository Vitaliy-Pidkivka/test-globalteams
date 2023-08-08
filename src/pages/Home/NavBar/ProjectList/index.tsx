import { useState } from "react"
import { ReactComponent as ArrowBottom } from "assets/icons/arrow-bottom.svg"
import { styled } from "@mui/material/styles"
import { AccordionDetails, Box, Divider } from "@mui/material"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import { ReactComponent as Techno } from "assets/icons/techno.svg"
import { ReactComponent as Spark } from "assets/icons/spark.svg"
import { ReactComponent as VisionX } from "assets/icons/vision.svg"
import Project from "./Project"

const projects = [
  { Icon: Techno, label: "Techno Fusion", id: 1, isActive: true },
  { Icon: Spark, label: "Spark Genius", id: 2, isActive: false },
  { Icon: VisionX, label: "VisionX", id: 3, isActive: false },
]

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  () => ({
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  })
)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />
))(() => ({
  border: "none",
  padding: 0,
  marginLeft: 0,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
}))

const ProjectList = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleCollapse = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <Box>
      <Accordion sx={{ padding: "10px 0 10px" }} expanded={expanded} onChange={toggleCollapse}>
        <AccordionSummary
          sx={{
            padding: 0,
          }}
          expandIcon={<ArrowBottom />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="primary.main" variant="h5" lineHeight={1}>
            My projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "8px 0 10px" }}>
          {projects.map(({ Icon, id, isActive, label }) => (
            <Box
              sx={{
                ":not(:last-child)": {
                  marginBottom: "18px",
                },
              }}
              key={id}
            >
              <Project isActive={isActive}>
                <Icon style={{ marginRight: "10px" }} />
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "12px",
                    ...(isActive && {
                      fontSize: "14px",
                      fontWeight: 600,
                    }),
                  }}
                >
                  {label}
                </Typography>
              </Project>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
      <Divider color="lightblue.dark" sx={{ opacity: 0.5 }} />
    </Box>
  )
}

export default ProjectList
