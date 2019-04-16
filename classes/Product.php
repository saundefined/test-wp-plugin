<?php

namespace Api\Plugin;

class Product
{
    private $wpdb;

    private $tableName = '';

    public function __construct() {
        global $wpdb;

        $this->wpdb = $wpdb;

        $this->tableName = $wpdb->prefix . 'api_fetch_data';
    }

    public function createOrUpdate($data) {
        if (!$data['categoryId'] || !$data['productId']) {
            return 0;
        }

        $productId = $data['productId'];
        $categoryId = $data['categoryId'];
        $name = htmlspecialchars($data['name']);
        $description = htmlspecialchars($data['description']);
        $price = htmlspecialchars($data['price']);

        $row = $this->wpdb->get_row('SELECT id FROM ' . $this->tableName . ' WHERE category_id = ' . $categoryId . ' 
            AND product_id = ' . $productId);

        if ($rowId = $row->id) {
            $this->wpdb->update($this->tableName, [
                'title' => $name,
                'description' => $description,
                'price' => $price
            ], [
                'id' => $rowId
            ]);
        } else {
            $this->wpdb->insert(
                $this->tableName,
                [
                    'title' => $name,
                    'description' => $description,
                    'price' => $price,
                    'category_id' => $categoryId,
                    'product_id' => $productId,
                ]
            );
            $rowId = $this->wpdb->insert_id;
        }

        return $rowId;
    }

    public function get($categoryId, $productId) {
        $row = $this->wpdb->get_row('SELECT * FROM ' . $this->tableName . ' WHERE category_id = ' . $categoryId . ' 
            AND product_id = ' . $productId);

        if (!$row->id) {
            return new \stdClass();
        }

        return $row;
    }
}