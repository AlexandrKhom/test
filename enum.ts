enum Membership {
    Simple,
    Standard,
    Premium
}
const membership = Membership.Standard;
console.log(membership); //log 2
const membershipReverse = Membership[1];
console.log(membershipReverse) //log Standard

enum Media {
    VK = 'VK',
    INSTA = 'INSTA',
    FACEBOOK = 'FACEBOOK'
}
const social = Media.INSTA
console.log(social) //log INSTA

