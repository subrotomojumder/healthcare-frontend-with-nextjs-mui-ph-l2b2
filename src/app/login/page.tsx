import assets from "@/assets";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          p: "50px",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login PH Healthcare
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form>
              <Grid container spacing={3} my={1}>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography
                component={"p"}
                fontWeight={300}
                textAlign={"end"}
                mb={1}
              >
                Forgot Password?
              </Typography>
              <Button fullWidth={true} size="small" type="submit" sx={{ my: 2 }}>
                Login
              </Button>
              <Typography component={"p"} fontWeight={300} textAlign={"center"}>
                Don&apos;t have an account?{" "}
                <Link href={"/register"}>Create an account</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
