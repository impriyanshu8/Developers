import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About UIET", href: "/about", icon: AlertTriangle },
    { name: "Departments", href: "/departments", icon: AlertTriangle },
    { name: "Admissions", href: "/admissions", icon: AlertTriangle },
    { name: "Contact", href: "/contact", icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-sky-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="shadow-2xl">
          <CardContent className="p-12 text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div
                className="text-8xl font-bold mb-4"
                style={{ color: "#118DC4" }}
              >
                404
              </div>
              <div className="flex justify-center mb-4">
                <Search className="h-16 w-16 text-gray-400" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Requested URL:{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">
                {location.pathname}
              </code>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/">
                <Button
                  className="w-full sm:w-auto flex items-center"
                  style={{ backgroundColor: "#118DC4" }}
                >
                  <Home className="h-4 w-4 mr-2" />
                  Go to Homepage
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="w-full sm:w-auto flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>

            {/* Quick Navigation */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Navigation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center p-3 bg-gray-50 hover:bg-cyan-50 rounded-lg transition-colors group"
                  >
                    <link.icon className="h-4 w-4 mr-2 text-gray-600 group-hover:text-[#118DC4]" />
                    <span className="text-sm text-gray-700 group-hover:text-[#118DC4]">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Need Help?</h4>
              <p className="text-sm text-yellow-700">
                If you believe this is an error, please contact our support team
                at{" "}
                <a
                  href="mailto:support@uiet.puchd.ac.in"
                  className="underline hover:text-yellow-900"
                >
                  support@uiet.puchd.ac.in
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
