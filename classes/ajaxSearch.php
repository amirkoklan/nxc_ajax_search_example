<?php
/**
 * @author VaL <vd@nxc.no>
 * @copyright Copyright (C) 2013 NXC AS
 * @license GNU GPL v2
 * @package nxc_ajax_search_example
 */

/**
 * Ajax search controller
 */
class ajaxSearch
{
    /**
     * @return (string)
     */
    public static function search( $args )
    {
        $q = isset( $args[0] ) ? $args[0] : false;

        $params = array();
        $searchResult = eZSearch::search( $q, $params );

        $tpl = eZTemplate::factory();
        $tpl->setVariable( 'list', $searchResult['SearchResult'] );
        $result = $tpl->fetch( 'design:ajax/search.tpl' );

        return $result;
    }
}
?>
