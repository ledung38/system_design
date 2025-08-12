const ContainerPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <p className="w-1/5">
          <span className="font-bold text-blue-500">Controlled:</span>{" "}
        </p>
        <p>
          <p>1. Giá trị của input được lưu trữ trong state của component,</p>
          <p>
            2. Component tự quản lý state con. Cha không thể thay đổi (cd: Flows
            step)
          </p>
        </p>
      </div>

      <div className="flex flex-row">
        <p className="w-1/5">
          <span className="font-bold text-blue-500">Uncontrolled:</span>{" "}
        </p>
        <p>
          <p>
            1. Input tự quản lý giá trị nội bộ thông qua DOM, không lưu trong
            React state. Lấy giá trị bằng ref
          </p>
          <p>2. Component cha quản lý state con (cd: Flows step)</p>
        </p>
      </div>
    </div>
  );
};

export default ContainerPage;
