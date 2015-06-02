<?php
$_widget = new stdClass();
$_widget->id = mt_rand(1,999);
$_widget->name = 'Subscribers';
$_widget->desc = 'Widget description';

$_widget_data = new stdClass();
$_widget_data->members = mt_rand(1,99999);
$_widget_data->subscribers = mt_rand(1000, 999999);
$_widget_data->source_url = '/source/stats';

$_widget_another_data = new stdClass();
$_widget_another_data ->downloads = mt_rand(1,99999);
$_widget_another_data ->updates = mt_rand(1000, 999999);
$_widget_another_data ->source_url = '/example';

$widgetData = array(
    'widget' => $_widget,
    'data' => [$_widget_data, $_widget_another_data]
);

echo json_encode($widgetData);