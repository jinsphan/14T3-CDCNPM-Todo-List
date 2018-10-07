How to use SDK API:

1/ Import model from servicer/api/model that you want use.
Ex: import CarsModel from '../../../../../services/api/model/Cars'
2/ Use features of model: create, update, find, findById, deleteByID, count ...
See more: services/model/nameModel
Ex:
    const filterOptions = {
                                where: {
                                    id: 10
                                  },
                                  limit: 10,
                                  offset: ''
                                }
    CarsModel.find(filterOptions)
      .then(res => {
        this.setState({cars: res.data})
      })

     CarsModel.create({
          name, brand, type, color, model, price, image: res
        }).then( result => {
          this.setState({ isLoading: false });
          browserHistory.push('/cars-list')
        }).catch(e => { this.setState({ isLoading: false }) })
