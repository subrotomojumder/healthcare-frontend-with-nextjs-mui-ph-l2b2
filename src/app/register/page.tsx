"use client";

import assets from "@/assets";
import { registerPatient } from "@/services/actions/registerPatient";
import { modifyPayload } from "@/utils/modifyPayload";
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
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TPatientRegisterFormData = {
  password: string;
  patient: TPatientData;
};
type TPatientData = {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
};

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TPatientRegisterFormData>();
  const onSubmit: SubmitHandler<TPatientRegisterFormData> = async (values) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res.data.id) {
        toast.success(res?.message);
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong !!");
    }
  };
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
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3} my={1}>
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    type="email"
                    fullWidth={true}
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Contact Number"
                    variant="outlined"
                    size="small"
                    type="tel"
                    fullWidth={true}
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    type="text"
                    size="small"
                    fullWidth={true}
                    {...register("patient.address")}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth={true}
                size="small"
                sx={{ my: 2 }}
              >
                Register
              </Button>
              <Typography component={"p"} fontWeight={300} textAlign={"center"}>
                Do you already have an account?{" "}
                <Link href={"/login"}>Login</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;
