const POSE_TYPES = ["squatting", "standing", "sidebend"];

function getPoseSequence(numPoses: number) {
  const poses = [];
  for (let i = 0; i < numPoses; i++) {
    const randomPose =
      POSE_TYPES[Math.floor(Math.random() * POSE_TYPES.length)];
    poses.push(randomPose);
  }
  return poses;
}

export default { getPoseSequence };
