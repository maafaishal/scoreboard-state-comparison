import { Outlet, useNavigate, useLocation } from "react-router";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { value: "/", label: "Context" },
    { value: "/zustand", label: "Zustand" },
    { value: "/redux", label: "Redux" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center py-4">
          <Tabs value={location.pathname} onValueChange={navigate}>
            <TabsList className="bg-secondary">
              {tabs.map(({ value, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </nav>
  );
}

export const RootLayout = () => {
  return (
    <div className="pt-16">
      <Navigation />
      <Outlet />
    </div>
  );
};
