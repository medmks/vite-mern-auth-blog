const NoDataMessage = (message: { message: string }) => {
  return (
    <div className=" bg-grey/50 w-full rounded-md p-4 flex justify-center text-center">
      <p> {message.message} </p>
    </div>
  );
};

export default NoDataMessage;
