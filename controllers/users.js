

const getOneUserBy = (query) => models.users.findOne(query)

export const createUser = async (req, res) => {
    try {
        const newUser = await models.users.create(req.body)
        res.json({ user: newUser.toJSON() })
    } catch (error) {
        console.log({ error })
        res.status(400).json({ user: null, error })
    }
}
