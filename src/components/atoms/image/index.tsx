function Image({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="pr-5" />;
}

export default Image;
