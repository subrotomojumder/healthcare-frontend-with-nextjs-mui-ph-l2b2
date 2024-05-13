import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import chooseUs from "@/assets/choose-us.png";
import Image from "next/image";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.kidney,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.brain,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.schedule,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box>
        <Typography
          color={"primary"}
          variant="h6"
          fontWeight={700}
          textAlign={"center"}
        >
          Why Us
        </Typography>
        <Typography variant="h4" fontWeight={700} textAlign={"center"}>
          Why Choose Us
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} my={5} alignItems={"center"}>
          <Grid item md={6}>
            {servicesData.map((service: any, index: number) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: "20px",
                  backgroundColor: "rgba(245, 245, 245, 1)",
                  padding: "15px",
                  alignItems: "center",
                  borderRadius: `10px ${index % 2 === 0 ? "10px" : "100px"}  ${
                    index % 2 === 0 ? "100px" : "10px"
                  } 10px`,
                  my: 3,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={service.imageSrc}
                    alt="image"
                    width={50}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={"primary.body1"}
                    fontWeight={300}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                margin: "0 auto",
                justifyContent:"center"
              }}
            >
              <Image src={chooseUs} alt="choose us" width={400} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
