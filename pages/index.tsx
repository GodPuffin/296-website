import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Layout } from '../components/layout';

export default function HomePage() {
  return (
    <>
      <Layout>
        <Welcome />
      </Layout>
    </>
  );
}
