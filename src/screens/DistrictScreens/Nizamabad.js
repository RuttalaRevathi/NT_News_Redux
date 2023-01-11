/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
<<<<<<< HEAD
import getNizamabadAction from '../../redux/actions/getNizamabadAction';
=======
>>>>>>> d6475f5 (district categories)
import CategoryUI from '../../components/CategoryUI';
import { getNizamabadAction } from '../../redux/actions/getNizamabadAction';


const NizamabadScreen = ({
    navigation,
    nizamabadData,
    nizamabadLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNizamabadAction());

    }, []);

    return (
        <CategoryUI
        data = {nizamabadData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="nizamabad"
        />
    );
};

type Props = {
    nizamabadData: Function,
    nizamabadLoading: Boolean,
};
const mapStateToProps = state => ({
    nizamabadData: state.nizamabadReducer?.nizamabadData,
    nizamabadLoading: state.nizamabadReducer?.nizamabadLoading,
});
const mapDispatchToProps = {
    getNizamabadAction,
};
<<<<<<< HEAD
=======

>>>>>>> d6475f5 (district categories)
export default connect(mapStateToProps, mapDispatchToProps)(NizamabadScreen);
