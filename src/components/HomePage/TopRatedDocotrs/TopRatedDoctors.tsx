import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import PlaceIcon from '@mui/icons-material/Place';
import Link from "next/link";

const TopRatedDoctors = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/doctor?page=1&limit=3`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: doctors } = await res.json();
  console.log(doctors);
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Typography variant="h4" fontWeight={600} textAlign={"center"}>
        Our Top Rated Doctors
      </Typography>
      <Typography
        component={"p"}
        fontWeight={300}
        fontSize={18}
        width={"50%"}
        mx={"auto"}
        textAlign={"center"}
      >
        Consectetur adipisicing elit. Excepturi magni sequi fugiat voluptatum
        aliquam ad asperiores reiciendis debitis obcaecati id!
      </Typography>
      <Container sx={{ margin: "30px auto" }}>
        <Grid container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid key={doctor.id} item md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Box>
                  <Image
                    src={doctor.profilePhoto}
                    alt="doctor"
                    height={100}
                    width={500}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification} , {doctor.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                   <PlaceIcon/> {doctor.address} 
                  </Typography>
                </CardContent>
                <CardActions sx={{
                    justifyContent: "space-between",
                    px:2,
                    py: '10px'
                }}>
                  <Button >Book Now</Button>
                  <Button variant="outlined">View Profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ marginTop: "50px" }} textAlign={"center"}>
          <Button variant="outlined" component={Link} href="/doctors">
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;