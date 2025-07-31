import { Card } from "@/app/compound-comp/page.client";

const CompoundPage = () => {
  return (
    <Card>
      <Card.Header>Header</Card.Header>
      <Card.Body>Body</Card.Body>
      <Card.Footer>
        <div className="flex gap-4 ">
          <button className="border-blue-500 rounded-2xl min-w-20 text-[red]">
            Cancel
          </button>
          <button className="bg-blue-500 rounded-2xl min-w-20 text-white">
            OK
          </button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CompoundPage;
