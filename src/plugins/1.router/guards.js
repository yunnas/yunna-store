
export const setupGuards = router => {
  // Keep the router.beforeEach if you still want to use other kinds of route guards,
  // but remove or comment out the login verification logic.
  router.beforeEach(to => {
    // Optional: Keep any public route checks or other custom guard logic here.
    // Remove or comment out the login check logic to disable login verification.
    
    // Always allow navigation without login check:
    return true // This line ensures that navigation proceeds without login verification.
  })
}
