const getFollowers = user =>
  user &&
  user.followers.filter(follower => !follower.followers.includes(user.id));

export default getFollowers;
// const followersToFollow = [];
// console.log('runnin');

// for (const follower of user.followers) {
//   if (follower.followers) {
//     if (!follower.followers.includes(user.id)) {
//       followersToFollow.push(follower);
//     }
//   }
// }

// console.log(followersToFollow);
