/** Seoul Field Guide routing: every public route resolves to the search-led travel discovery experience. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteShell from "@/components/SiteShell";
import Home from "@/pages/Home";
import Destinations from "@/pages/Destinations";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return <SiteShell><Switch><Route path="/" component={Home} /><Route path="/packages" component={Home} /><Route path="/destinations" component={Destinations} /><Route path="/guide" component={Home} /><Route path="/contact" component={Home} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch></SiteShell>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
