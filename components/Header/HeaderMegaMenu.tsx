import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Image,
  ActionIcon,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconRocket,
  IconBatteryAutomotive,
  IconBolt,
  IconVirus,
  IconBattery3,
  IconPlugConnected,
} from '@tabler/icons';
import { ButtonToggle } from '../ColorSchemeToggle/ButtonToggle';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const mockdata = [
  {
    icon: IconPlugConnected,
    title: '2023 - Charged Up',
    description: 'The ongoing season',
  },
  {
    icon: IconBattery3,
    title: '2022 - Rapid React',
    description: 'Bartholomew and its Conveyer',
  },
  {
    icon: IconVirus,
    title: '2021 - Infinite Recharge 2',
    description: 'Covid acitivities and Projects',
  },
  {
    icon: IconBolt,
    title: '2020 - Infinite Recharge',
    description: 'Bruce and its scissor lift',
  },
  {
    icon: IconRocket,
    title: '2019 - Deep Space',
    description: 'Blastoff and its big piston',
  },
  {
    icon: IconBatteryAutomotive,
    title: '2018 - Powerup',
    description: 'Whipsnake and its flailing arm',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <Header height={80} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <div style={{ marginLeft: '10px', marginRight: 'auto' }}>
            <Image
              width={120}
              fit="contain"
              src={'/Images/296_Logo_Cyan.png'}
              alt="Logo"
              withPlaceholder
            />
          </div>

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Robots
                    </Box>
                    <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text weight={500}>Robots</Text>
                  <Anchor href="#" size="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Design Philosophy
                      </Text>
                      <Text size="xs" color="dimmed">
                        The approach we at 296 take when designing a robot.
                      </Text>
                    </div>
                    <Button variant="default">Read More →</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Sponsors
            </a>
            <a href="#" className={classes.link}>
              Media
            </a>

{/* Social Media Icons */}

          <SimpleGrid cols={4} spacing="xs">
            <ActionIcon
              component="a"
              href="https://github.com/FRC296"
              target="_blank"
              size="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
                color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[9],
              })}
            >
              <IconBrandGithub />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://www.instagram.com/frc296/"
              target="_blank"
              size="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
                color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[9],
              })}
            >
              <IconBrandInstagram />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://twitter.com/FRC296"
              target="_blank"
              size="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
                color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[9],
              })}
            >
              <IconBrandTwitter />
            </ActionIcon>
            <ColorSchemeToggle />
            </SimpleGrid>
          </Group>

          <Group className={classes.hiddenMobile}>

          </Group>

{/* Mobile */}

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Robots
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Sponsors
          </a>
          <a href="#" className={classes.link}>
            Media
          </a>
          <a href="https://github.com/FRC296" target="_blank" className={classes.link}>
            Github
          </a>
          <a href="https://www.instagram.com/frc296/" target="_blank" className={classes.link}>
            Instagram
          </a>
          <a href="https://twitter.com/FRC296" target="_blank" className={classes.link}>
            Twitter
          </a>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <ButtonToggle />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
