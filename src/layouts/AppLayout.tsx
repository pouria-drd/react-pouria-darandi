interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return <main className="flex flex-col">{children}</main>;
};

export default AppLayout;
