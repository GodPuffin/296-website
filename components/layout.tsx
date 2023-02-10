import { HeaderAction } from './Header/HeaderAction';
import { HeaderMegaMenu } from './Header/HeaderMegaMenu';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <HeaderAction
        links={[
          { link: 'https://example.com', label: 'Test1', links: [{ link: 'test', label: 'test' }] },
          { link: 'https://example.com', label: 'Test2', links: []},
        ]}
      /> */}
      <HeaderMegaMenu />
      <main>{children}</main>
    </>
  );
}
