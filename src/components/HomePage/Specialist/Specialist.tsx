import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Specialist = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/specialties`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialists } = await res.json();
  return (
    <Container>
      <Box sx={{ margin: "40px 0px", textAlign: "start" }}>
        <Typography variant="h4" fontWeight={600}>
          Explore Treatments Across Specialties
        </Typography>
        <Typography component={"p"} fontWeight={300} fontSize={18}>
          Find experienced doctors all specialties
        </Typography>
        <Stack direction={"row"} gap={4} mt={5}>
          {specialists.map((specialty: any) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  borderRadius: "10px",
                  padding: "40px 10px",
                  transform: "all",
                },
              }}
            >
              <Image
                src={specialty.icon}
                width={100}
                height={100}
                alt={specialty.title}
              />
              <Typography component={"p"} fontWeight={600} fontSize={18} mt={2}>
                {specialty.title}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Box sx={{ marginTop: "50px" }} textAlign={"center"}>
          <Button variant="outlined" component={Link} href="/specialties">
            View All
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
