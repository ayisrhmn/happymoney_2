import React from 'react';
import DatePicker from 'react-native-modern-datepicker';

import {useActions, useAppState} from '@overmind/index';
import Modal from '@components/modal';
import {Colors, Mixins, Typography} from '@utils/index';

const ModalDatePicker = () => {
  const {datePickerShow, confirmDate} = useActions();
  const {showDatePicker, selectedMonth} = useAppState();

  const datePickerOption = {
    textHeaderColor: Colors.PRIMARY,
    mainColor: Colors.PRIMARY,
    defaultFont: Typography.FONT_FAMILY.regular,
    headerFont: Typography.FONT_FAMILY.bold,
  };

  return (
    <Modal
      show={showDatePicker}
      loading={false}
      onClose={() => datePickerShow(false)}
    >
      <DatePicker
        mode="monthYear"
        selectorStartingYear={2000}
        current={selectedMonth}
        onMonthYearChange={(date: any) => confirmDate(date)}
        options={datePickerOption}
        style={{borderRadius: Mixins.scaleSize(10)}}
      />
    </Modal>
  );
};

export default ModalDatePicker;
