{if $list}
    {foreach $list as $item}
        {node_view_gui content_node=$item view=line}
    {/foreach}
{else}
    No objects found
{/if}
