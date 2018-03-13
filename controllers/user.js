/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-unresolved: 0 */

const Authenticator = require('../middlewares/authenticator');
const User = require('../dbs/user')

/**
 * Controller for Users
 */
class UserController {
    /**
     * Method to set the various document routes
     * @param{Object} req - Server req
     * @return{Object} return req parameters
     */
  static postreq(req) {
    return (
        req.body &&
        req.body.username &&
        req.body.password &&
        req.body.email
    );
  }

  /**
   * Method used to create new user
   * @param{Object} req - Server req
   * @param{Object} res - Server res
   * @returns{Void} return Void
   */
  async static createUser (req, res) {
    try{
      if (UserController.postreq(req)) {
        const newUser = await Users.create(req.body);
        return res.status(201).send({
          success: true,
          message: 'User successfully signed up',
          token: Authenticator.generateToken(newUser)
        })
      }
      return res.status(400).send({
        success: false,
        message: 'You did not input your field properly',
      });
    }
    catch(error){
      return res.status(400).send({
        success: false,
        message: error.errors[0].message
      });
    }
  }

 /**
   * Method used to login a user
   * @param{Object} req - Server req
   * @param{Object} res - Server res
   * @returns{Void} return Void
   */
 async static loginUser(req, res) {
   const user = await User.getUser(req.body.username);
   if (user && user.passwordMatched(req.body.password)) {
    const token = Authenticator.generateToken(user);
      res.status(200).send({
        message: 'login successfully',
        token,
      });
    } else {
      res.status(403).send({
        success: false,
        message: 'Failed to Authenticator User, Invalid Credentials'
      });
    }
  }
}

module.exports = UserController