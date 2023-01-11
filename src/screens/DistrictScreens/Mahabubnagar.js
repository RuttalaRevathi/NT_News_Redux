/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
<<<<<<< HEAD
import getMahabubNagarAction from '../../redux/actions/getMahabubnagarAction';
=======
// import getMahabubnagarAction from '../../redux/actions/getDistrictsAction';
>>>>>>> d6475f5 (district categories)
import CategoryUI from '../../components/CategoryUI';
import { getMahabubnagarAction } from '../../redux/actions/getMahabubnagarAction';


const MahabubnagarScreen = ({
    navigation,
    mahabubnagarData,
    mahabubnagarLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
<<<<<<< HEAD
        dispatch(getMahabubNagarAction());
=======
        dispatch(getMahabubnagarAction());
>>>>>>> d6475f5 (district categories)

    }, []);
    // share function

    return (
        <CategoryUI
        data = {mahabubnagarData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="mahabubnagar"
        />
    );
};

type Props = {
    mahabubnagarData: Function,
    mahabubnagarLoading: Boolean,
};
const mapStateToProps = state => ({
    mahabubnagarData: state.mahabubnagarReducer?.mahabubnagarData,
    mahabubnagarLoading: state.mahabubnagarReducer?.mahabubnagarLoading,
});
const mapDispatchToProps = {
<<<<<<< HEAD
    getMahabubNagarAction,
};
=======
    getMahabubnagarAction,
};

>>>>>>> d6475f5 (district categories)
export default connect(mapStateToProps, mapDispatchToProps)(MahabubnagarScreen);
