import User from "../../models/user/user.js";

const deleteUser =async (req, res) => {
    try {
        const { id } =  req.params;
         const deleteData = await User.findByIdAndDelete(id)
        res.status(200).send({
            status: 200,
            message: " deleted succsfully", deleteData,
        })
        console.log(User)
    } catch (error) {
        res.status(400).send({ status: 400, error })
    }
}
export { deleteUser };