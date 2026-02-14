const Footer = () => (
  <footer className="border-t border-border py-8 bg-background">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Mode Stack. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
