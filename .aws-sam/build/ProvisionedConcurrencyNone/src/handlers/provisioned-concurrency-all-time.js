function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

exports.scheduledEventLoggerHandler = async (event, context) => {
  await sleep(5000);
  console.info('All Time Provisioned');
};
