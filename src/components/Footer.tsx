import { artists, author } from "../data";

const Footer = () => {
  return (
    <footer>
      @{new Date().getFullYear()} {author.name} 🦉
      <br />
      Artwork by{" "}
      <a href={artists.cyannocti.instagram} target="_blank" rel="noopener">
        {artists.cyannocti.handle}
      </a>
      {", "}
      <a href={artists.eunalis.fiverr} target="_blank" rel="noopener">
        {artists.eunalis.handle}
      </a>{" "}
      &amp;{" "}
      <a href={artists.toastysqxiid.instagram} target="_blank" rel="noopener">
        {artists.toastysqxiid.handle}
      </a>
    </footer>
  );
};

export default Footer;
