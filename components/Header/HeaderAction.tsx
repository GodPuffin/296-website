import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Image,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderActionProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Image height={HEADER_HEIGHT} fit="contain" src={"/Images/296_Logo_Cyan.png"} alt="Logo" withPlaceholder/>
          </div>
          {/* <Title order={3}>296</Title>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline>
            <line x1="13" y1="19" x2="19" y2="13"></line>
            <line x1="16" y1="16" x2="20" y2="20"></line>
            <line x1="19" y1="21" x2="21" y2="19"></line>
            <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline>
            <line x1="5" y1="14" x2="9" y2="18"></line>
            <line x1="7" y1="17" x2="4" y2="20"></line>
            <line x1="3" y1="19" x2="5" y2="21"></line>
          </svg> */}
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <ColorSchemeToggle />
      </Container>
    </Header>
  );
}
