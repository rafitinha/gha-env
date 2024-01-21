import * as functions from "firebase-functions";

export const onAddCourseUpdatePromoCounter = functions
  .runWith({
    timeoutSeconds: 300,
    memory: "128MB",
  })
  .firestore.document("courses/{courseId}")
  .onCreate(async (snap, context) => {
    functions.logger.debug(
      `Running add course trigger for couseId ${context.params.courseId}`
    );
  });
