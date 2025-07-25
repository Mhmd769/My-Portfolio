import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-backgeround text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        
        <ThemeToggle/>



        {/* Background Effects */}

        <StarBackground/>

        {/* NavBar */}
        {/* Main Content */}
        {/* Footer */}

    </div>
  );
}