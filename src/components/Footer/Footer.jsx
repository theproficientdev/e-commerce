import { Container, Typography, Grid, IconButton } from "@material-ui/core";
import {
    Facebook,
    Instagram,
    Pinterest,
    Twitter,
} from "@material-ui/icons";
import { Stack, Tooltip } from "@mui/material";
  
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    const data = [
        {
          type: "About",
          subTypes: [
            "Contact Us",
            "About Us",
            "Features",
            "Careers",
            "Stories",
          ],
        },
        {
          type: "Help",
          subTypes: [
            "Services",
            "Referral Program",
            "Pricing",
            "Payments",
            "Shopping",
          ],
        },
        {
          type: "Policy",
          subTypes: ["Return", "Terms", "Privacy", "Sitemap"],
        },
        {
          type: "More",
          subTypes: ["Documentation", "License", "Changelog"],
        },
    ];
    const socialLinks = [
        {link: <Facebook />, name: 'Facebook handle'},
        {link: <Instagram />, name: 'Instagram handle'},
        {link: <Twitter />, name: 'Twitter handle'},
        {link: <Pinterest />, name: 'Pinterest handle'},
    ];

    return (
        <Container className={classes.footer}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Container>
                    <Typography color="primary" variant="h6">SuperShop</Typography>
                    </Container>
                    <Typography variant="body1">
                        Your Everything Store
                    </Typography>

                    <Stack direction="row" spacing={7} className={classes.icons}>
                    {socialLinks.map((link, index) => (
                        <Tooltip title={link.name}>
                            <IconButton key={index} color="primary">
                                {link.link}
                            </IconButton>
                        </Tooltip>
                    ))}
                    </Stack>
                </Grid>
                {data.map(({ type, subTypes }, index) => {
                    return (
                        <Grid item xs={6} sm={6} md={2} lg={2} key={index}>
                            <Container>
                                <Typography className="title" color="primary">{type}</Typography>
                                <Stack spacing={1}>
                                    {subTypes.map((type, index) => (
                                        <Typography key={index}>{type}</Typography>
                                    ))}
                                </Stack>
                            </Container>
                        </Grid>
                    );
                    })}
            </Grid>
        </Container>
    );
};

export default Footer;
  