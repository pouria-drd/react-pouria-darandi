interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return <main className="app-px py-4">{children}</main>;
};

export default AppLayout;
