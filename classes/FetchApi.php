<?php

namespace Api\Plugin;

class FetchApi
{
    /**
     * @var string
     */
    private $baseUrl;

    /**
     * @var string
     */
    private $apiKey;

    /**
     * FetchApi constructor.
     * @param string $baseUrl
     * @param string $apiKey
     */
    public function __construct($baseUrl, $apiKey) {
        $this->baseUrl = $baseUrl;
        $this->apiKey = $apiKey;
    }

    /**
     * @return array
     */
    public function getCategories() {
        return $this->query('/getcategories');
    }

    /**
     * Запрос к API
     *
     * @param $path
     * @param array $params
     * @return array
     */
    private function query($path, $params = []) {
        if (!isset($params['key'])) {
            $params['key'] = $this->apiKey;
        }

        if (!$this->baseUrl || !$params['key']) {
            return ['error_code' => 'bad_request'];
        }

        $cacheKey = 'api-fetch-data-' . md5(implode(array_merge([$path], $params)));
        $body = get_transient($cacheKey);

        if (false === $body) {
            $response = wp_remote_get($this->baseUrl . $path . '?' . http_build_query($params), [
                'timeout' => 3,
            ]);
            $body = json_decode($response['body'], true);
            set_transient($cacheKey, $body, 3600);
        }

        return $body;
    }

    /**
     * @param int $categoryId
     * @return array
     */
    public function getProducts($categoryId) {
        return $this->query('/getproducts', [
            'categoryId' => $categoryId
        ]);
    }

    /**
     * @param int $categoryId
     * @param int $productId
     * @return array
     */
    public function getProduct($categoryId, $productId) {
        return $this->query('/getproduct', [
            'categoryId' => $categoryId,
            'productId' => $productId,
        ]);
    }
}