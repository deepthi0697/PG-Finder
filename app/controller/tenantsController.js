const Tenant = require('../model/Tenant')

module.exports.list = (req, res) => {
    Tenant.find()
        .then((tenant) => {
            if(tenant){
                res.json(tenant)
            } else {
                res.json(err)
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const tenant = new Tenant(body)
    tenant.save()
        .then((tenant) => {
            if(tenant){
                res.json(tenant)
            } else {
                res.json(err)
            }
        })
        .catch((err) => {
            res.json(err)
        })
    }

    module.exports.show = (req, res) => {
        const id = req.params.id
        Tenant.findById(id)
            .then((tenant) => {
                if(tenant){
                    res.json(room)
                } else {
                    res.json(err)
                }
            })
            .catch((err) => {
                res.json(err)
            })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Tenant.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then((tenant) => {
            if(tenant){
                res.json(tenant)
            } else {
                res.json(err)
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Tenant.findByIdAndDelete(id)
        .then((tenant) => {
            if(tenant){
                res.json(tenant)
            } else {
                res.json(err)
            }
        })
        .catch((err) => {
            res.json(err)
        })
}