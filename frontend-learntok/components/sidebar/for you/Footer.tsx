const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="hidden xl:flex flex-col gap-1 h-1/3">
      <ul className="flex flex-col gap-2 text-sm">
        <li>
          About Newsroom Store Contact Careers ByteDance Creator Directory
        </li>

        <li>
          TikTok for Good Advertise Developers Transparency TikTok Rewards
        </li>

        <li>Help Safety Terms Privacy Creator Portal Community Guidelines</li>
      </ul>

      <p> © {year} LearnTok</p>
    </div>
  );
};

export default Footer;
