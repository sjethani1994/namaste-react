const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex shrink-0 items-center justify-center gap-5 border-t border-[#f1e4da] bg-cream px-3 py-2 text-xs text-[#666] shadow-[0_-3px_15px_rgba(0,0,0,0.05)] xs:justify-between xs:px-5 xs:py-2.5 xs:text-[13px] md:px-[50px] md:py-3">
      <p>
        🍔 <span className="font-bold text-brand">Namaste Food</span> · Made
        with ❤️ by Sumit Jethani
      </p>

      {/* Hidden below 768px to keep the footer short */}
      <p className="hidden text-[#999] md:block">
        © {year} Namaste Food. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
