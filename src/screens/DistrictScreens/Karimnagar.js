/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
<<<<<<< HEAD
import { useDispatch, connect } from 'react-redux';
import getKarimnagarAction from '../../redux/actions/getKarimnagarAction';
=======
import { useDispatch, connect, useSelector } from 'react-redux';
>>>>>>> d6475f5 (district categories)
import CategoryUI from '../../components/CategoryUI';
import { getKarimnagarAction } from '../../redux/actions/getKarimnagarAction';


const KarimnagarScreen = ({
    navigation,
    karimnagarData,
    karimnagarLoading,
    route,
}: Props) => {
    karimnagarData = useSelector(state => state.karimnagarReducer.karimnagarData);

    // const dispatch = useDispatch();

    useEffect(() => {
<<<<<<< HEAD
        dispatch(getKarimnagarAction());
=======
        // dispatch(getKarimnagarAction());
>>>>>>> d6475f5 (district categories)

    }, []);
    console.log(karimnagarData,"==========================karimnagarData");

    return (
        <CategoryUI
        data = {karimnagarData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="karimnagar"
        />
    );
};

type Props = {
    karimnagarData: Function,
    karimnagarLoading: Boolean,
};
<<<<<<< HEAD
const mapStateToProps = state => ({
    karimnagarData: state.karimnagarReducer?.karimnagarData,
    karimnagarLoading: state.karimnagarReducer?.karimnagarLoading,
});
const mapDispatchToProps = {
    getKarimnagarAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(KarimnagarScreen);
=======
// const mapStateToProps = state => ({
//     karimnagarData: state.karimnagarReducer?.karimnagarData,
//     karimnagarLoading: state.karimnagarReducer?.karimnagarLoading,
// });
// const mapDispatchToProps = {
//     getKarimnagarAction,
// };

export default KarimnagarScreen;
>>>>>>> d6475f5 (district categories)
