import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor={"rgba(17, 26, 34)"} py={5}>
      <Container>
        <Stack direction={"row"} justifyContent={"center"} gap={4}>
          <Typography color={"#fff"} component={Link} href="/">
            Consultations
          </Typography>
          <Typography color={"#fff"} component={Link} href="/">
            Health Plans
          </Typography>
          <Typography color={"#fff"} component={Link} href="/">
            Medicine
          </Typography>
          <Typography color={"#fff"} component={Link} href="/">
            NGOs
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={4} py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="facebook" />
          <Image src={twitterIcon} width={30} height={30} alt="facebook" />
          <Image src={linkedinIcon} width={30} height={30} alt="facebook" />
        </Stack>
        <div className="border-b-[1px] border-dashed" />
        <Stack direction={"row"} justifyContent={"space-between"} py={4}>
          <Typography component={"p"} color={"white"}>
            &copy; 2024 PH HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            component={Link}
            href="/"
            variant="h4"
            fontWeight={600}
            color={"white"}
          >
            P
            <Box component={"span"} color={"primary.main"}>
              H{" "}
            </Box>
            Health Care
          </Typography>
          <Typography component={"p"} color={"white"}>
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
