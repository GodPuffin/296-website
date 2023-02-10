import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'cyan 0', to: 'cyan' }}>
          296
        </Text>
        {' '}The Northern Knights
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Since 1999, the Northern Knights, a high school robotics team bringing together students
        from Loyola High School, has competed in the{' '}
        <Anchor href="https://www.firstinspires.org/robotics/frc" size="lg">
          FIRST Robotics Competition
        </Anchor>
        . FRC is an international student robotics competition brings together over 3200 teams from
        26 countries, to complete in the annual challenge designed by FIRST. A challenge, which
        allows us students to experience the practical side of the sciences and develop invaluable
        real-world skills.
      </Text>
    </>
  );
}
