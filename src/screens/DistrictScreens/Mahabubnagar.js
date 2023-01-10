/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getMahabubNagarAction from '../../redux/actions/getMahabubnagarAction';
import CategoryUI from '../../components/CategoryUI';


const MahabubnagarScreen = ({
    navigation,
    mahabubnagarData,
    mahabubnagarLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMahabubNagarAction());

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
    getMahabubNagarAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(MahabubnagarScreen);
