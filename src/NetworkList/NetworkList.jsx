import Container from "../ReusableComponent/Container";

export default function NetworkList() {
  return (
    <div>
      <div className="flex gap-5">
        <Container icon="fa-brands fa-linkedin" name="LinkdIn" />
        <Container icon="fa-brands fa-github" name="GitHub" />
      </div>
    </div>
  );
}
