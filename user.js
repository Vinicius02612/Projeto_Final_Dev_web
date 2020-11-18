module.exports = app=>{
    const save = (req, res)=>{
        res.save('users save')
    }

    return {save}
}