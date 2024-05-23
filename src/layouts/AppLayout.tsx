interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return <main className="flex flex-col h-svh">{children}</main>;
};

export default AppLayout;
